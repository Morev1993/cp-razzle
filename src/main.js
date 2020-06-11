import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import {Helmet} from "react-helmet";
import { withLocalize } from "react-localize-redux";

import {Modal} from "./shared/modal/Modal";
import HomePage from "./pages/home/HomePage";
import ContactsPage from "./pages/contacts/ContactsPage";
import BlogPage from "./pages/blog/BlogPage/BlogPage";
import PostPage from "./pages/blog/PostPage/PostPage";
import CareersPage from "./pages/careers/CareersPage/CareersPage";
import VacancyPage from "./pages/careers/VacancyPage/VacancyPage";
import ApplyPage from "./pages/apply/ApplyPage";
import {AboutPage} from "./pages/about/AboutPage/AboutPage";
import {WebsiteTerms} from "./pages/about/WebsiteTerms/WebsiteTerms";
import {DocumentsPage} from "./pages/about/DocumentsPage/DocumentsPage";
import {BankingPage} from "./pages/banking/BankingPage/BankingPage";
import DevelopersPage from "./pages/developers/DevelopersPage";
import NotePage from "./pages/note/NotePage";
import {Page404} from "./pages/404/page404";
import MessageCookies from "./shared/parts/message-cookies/MessageCookies";
import * as moment from "moment";
import { renderToStaticMarkup } from "react-dom/server";
import {LANGUAGE_STORAGE_KEY} from "./utils/options";
import {environment} from "./environments";
import ReactGA from "react-ga";

const MODAL_MEETUP_1 = 'modal.meetup1';

function detectLanguage() {
  const supportLanguages = ['en', 'es', 'pt', 'vi', 'zh'];
  let detectedLanguage = 'en';

  if (typeof navigator === 'undefined') {
    return detectedLanguage;
  }
  const navLangFirstSegment = getFirstLocaleSegment(navigator.language);

  if (navigator.languages) {
    for (let i = 0; i < navigator.languages.length; i++) {
      const language = getFirstLocaleSegment(navigator.languages[i]);

      if (supportLanguages.includes(language)) {
        detectedLanguage = language;
        break;
      }
    }

  } else if (navLangFirstSegment && supportLanguages.includes(navLangFirstSegment)) {
    detectedLanguage = navLangFirstSegment;
  }

  if (!!environment.gaId) {
    ReactGA.event({
      category: 'User',
      action: 'AutoChangeLanguage',
      label: detectedLanguage
    });
  }

  return detectedLanguage;
}

function getFirstLocaleSegment(locale) {
  const localeSegments = locale.split('-');
  return localeSegments ? localeSegments[0] : null;
}

function getUserLanguage() {
  let storedLanguage;

  if (typeof localStorage === 'undefined') {
    return storedLanguage;
  }

  try {
     storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  } catch (e) {}

  if (!storedLanguage) {
    storedLanguage = detectLanguage();
    localStorage.setItem(LANGUAGE_STORAGE_KEY, storedLanguage);
  }

  return storedLanguage;
}


class Main extends Component {
  constructor(props) {
    super(props);

    this.props.initialize({
      languages: [
        { name: 'English', code: 'en' },
        { name: 'Español', code: 'es' },
        { name: 'Português', code: 'pt' },
        { name: 'Tiếng Việt', code: 'vi' },
        { name: '简体中文', code: 'zh' },
      ],
      options: {
        defaultLanguage: getUserLanguage(),
        renderToStaticMarkup,
      }
    });

    // Banner data
    this.finishDate = new Date();
    this.finishDate.setFullYear(2019, 8, 9);
    this.finishDate.setHours(0, 0, 0);
    this.nowDate = new Date();
    this.nowDate.setHours(0, 0, 0);

    this.currentDateStr = moment(this.nowDate).format('YYYY-MM-DDTHH:mm:ss');
    const ignoreModalDateStr = typeof localStorage !== 'undefined' ? localStorage.getItem(MODAL_MEETUP_1) : false;

    this.finishBannerDays = Math.ceil((+this.finishDate - +this.nowDate) / 1000 / 60 / 60 / 24);

    this.state = {
      isShowModal: ignoreModalDateStr !== this.currentDateStr
        && this.finishBannerDays >= -4
        && this.finishBannerDays <= 5,
    };

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    try {
      window.localStorage.setItem(MODAL_MEETUP_1, this.currentDateStr);
      window.localStorage.setItem(MODAL_MEETUP_1, this.currentDateStr);
    } catch (e) {}
    this.setState({ isShowModal: false });
  }

  render() {
    return (
      <div className="App">
        {this.state.isShowModal && (<Modal
          finishDays={this.finishBannerDays}
          onClose={this.closeModal}
        />)}

        <Helmet
          titleTemplate="%s | CARDPAY - Acquirer"
          defaultTiyle="CARDPAY - Acquirer"
        >
          <meta name="description" content="Cardpay is a licensed ecommerce acquirer and a payment service provider for online businesses" />
        </Helmet>

        <div className="slides">
          <Route exact path="/" render={() => <Redirect to="home" />} />
          <Route path="/privacy-policy" render={() => {
              window.location.href = '/static/media/CP_G_Privacy_Notice_V.02.c7c94300.pdf';
            }
          } />
          <Switch>
            <Route path="/home" component={ () => (<HomePage />)} />
            <Route path="/contacts" exact component={ () => (<ContactsPage />)} />
            <Route path="/blog" exact component={ () => (<BlogPage />)} />
            <Route path="/blog/:postSlug" component={PostPage} />
            <Route path="/careers" exact component={() => (<CareersPage />)} />
            <Route path="/careers/:vacancyId" component={VacancyPage} />
            <Route path="/apply" exact component={() => (<ApplyPage />)} />
            <Route path="/wix/apply" exact component={() => (<ApplyPage />)} />
            <Route path="/about-company" component={AboutPage} />
            <Route path="/website-terms-of-use" component={WebsiteTerms} />
            <Route path="/documents" component={DocumentsPage} />
            <Route path="/privacy-policy" component={DocumentsPage} />
            <Route path="/ibanking" component={BankingPage} />
            <Route path="/developers" exact component={() => (<DevelopersPage />)} />
            <Route path="/en/note.html" exact component={NotePage} />
            <Route path="/en/note" exact component={NotePage} />
            <Route path="*" component={Page404} />
          </Switch>
        </div>

        <MessageCookies />

      </div>
    );
  }
}

export default withLocalize(Main);
