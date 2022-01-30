# Client Portal Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

| Command | Description | Environment File | Branch |
| -------- | -------- | -------- | -------- |
| **`yarn start`** | Runs the app in the development mode. | `.env.development` | `working branch` |
| **`yarn start:production`** | Runs the app in the development mode using **Production** api. | `.env.production` | `master` |
| **`yarn start:staging`** | Runs the app in the development mode using **Staging** api. | `.env.staging` | `working branch` |
| **`yarn start:stage2`** | Runs the app in the development mode using **Salesforce** api. | `.env.stage2` | `stage2` |
| **`yarn start-purgo`** | Runs the app in the development of **Purgo Version**. | `.env.purgo.development` | `purgo/staging` |
| - | - | - | - |
| **`yarn build`** | Builds the app for **Production** to the `build` folder. | `.env.production` | `master` |
| **`yarn build-purgo`** | Builds the app for **Purgo Production** to the `build` folder. | `.env.purgo.production` | `purgo/production` |
| **`yarn build:staging`** | Builds the app for **Staging** to the `build` folder. | `.env.staging` | `release/staging` |
| **`yarn build-purgo:staging`** | Builds the app for **Purgo Staging** to the `build` folder. | `.env.purgo.staging` | `purgo/staging` |
| **`yarn build:stage2`** | Builds the app for **Salesforce** to the `build` folder. | `.env.stage2` | `stage2` |
| - | - | - | - |
| **`yarn test`** | Launches the test runner in the interactive watch mode. |  |  |

For Deployment, Using Sass/CSS Modules, Building, Testing, Advanced Usage etc please check the [Documentation of Create React App](https://create-react-app.dev/docs/getting-started/)

## Project Summary

**Production Link** - <https://client.taxrise.com/>  
**Staging Link** - <https://staging-client.taxrise.com/>  

**Salesforce Version of Client Portal** - <https://stage2-client.taxrise.com/>  
**Purgo Version of Client Portal** - <https://client.purgo.com/>  
**Purgo Staging Version of Client Portal** - <https://staging-client.purgo.com/>

## Libraries
#### Dependencies  
- `@sentry/react` - *Sentry integration library for React*
- `@testing-library/jest-dom` - *Jest DOM Testing library*
- `@testing-library/react` - *React Testing Library*
- `@testing-library/user-event`
- `antd` - *Ant Design Library*
- `axios` - *Promise based Data fetching library, used as an alternate of `fetch`*
- `cleave.js` - *Cleave JS to take formatted data from user. e.g. Credit Card, Date, Amount etc*
- `d3` - *D3.js Library to design charts*
- `env-cmd` - *For using multiple type environment variables e.g. `staging`*
- `formik` - *Formik has been used to develop Forms*
- `jwt-decode` - *JWT Decoder Library*
- `moment` - *Moments js to manipulate, parse, formate date time*
- `prop-types` - *Declaring Component Prop Types*
- `react`
- `react-app-polyfill`
- `react-calendly` - *Calendly integration library for React*
- `react-dom`
- `react-hotjar` - *Hotjar integration library for React*
- `react-intl` - *React Internationalization Library*
- `react-router-dom` - *React Router Dom Library*
- `react-scripts`
- `recharts` - *Rechart Library*
- `simplebar-react` - *Simplebar React to develop custom scrollbar*
- `store` - *For parsing and manipulating browser storage e.g. `localStorage`, `sessionStorage`, `cookieStorage` etc*
- `styled-components` - *Styled Components to add style in js*
- `web-vitals`
- `yup` - *User Input Validation library, works along with `Formik`*

#### Development Dependencies
- `eslint-config-google` - *ES Lint configuration for using Google JavaScript Coding Style*
- `eslint-config-prettier` - *ES Lint configuration for Prettier*
- `eslint-plugin-react` - *ES Lint configuration for React*
- `eslint-plugin-react-hooks` - *ES Lint configuration for React Hooks*
- `prettier` - *Prettier library*

## Directory and Files `./src`

📦src  
 ┣ 📂api ***API call function and endpoints***  
 ┃ ┣ 📜endpoints.js  
 ┃ ┣ 📜index.js  
 ┃ ┗ 📜useApi.js  
 ┣ 📂assets ***Assets directory to keep images, videos, files etc***  
 ┃ ┣ 📂doc  
 ┃ ┣ 📂file  
 ┃ ┗ 📂img  
 ┣ 📂components ***Components Directory***  
 ┃ ┣ 📂BackButton  
 ┃ ┃ ┣ 📜BackButton.js  
 ┃ ┃ ┗ 📜index.js  
 ┃ ┣ 📂Badge  
 ┃ ┃ ┣ 📜Badge.js  
 ┃ ┃ ┗ 📜index.js  
 ┃ ┣ 📂Button  
 ┃ ┃ ┣ 📜Action.js  
 ┃ ┃ ┣ 📜ActionToDo.js  
 ┃ ┃ ┣ 📜Button.js  
 ┃ ┃ ┣ 📜ButtonBlock.js  
 ┃ ┃ ┣ 📜Direction.js  
 ┃ ┃ ┣ 📜IconTextButton.js  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┣ 📜LinkButton.js  
 ┃ ┃ ┣ 📜TagButton.js  
 ┃ ┃ ┗ 📜UploadButton.js  
 ┃ ┣ 📂Card  
 ┃ ┃ ┣ 📜FileCard.js  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┗ 📜SummaryCard.js  
 ┃ ┣ 📂Chart  
 ┃ ┃ ┣ 📜BarChart.js  
 ┃ ┃ ┣ 📜chart.css  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┗ 📜PieChart.js  
 ┃ ┣ 📂Charts  
 ┃ ┃ ┣ 📜AxisLabel.js  
 ┃ ┃ ┣ 📜CategoryPieChart.js  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┗ 📜TransactionBarChart.js  
 ┃ ┣ 📂Collapse  
 ┃ ┃ ┣ 📜CardCollapse.js  
 ┃ ┃ ┣ 📜ChartCollapsePanel.js  
 ┃ ┃ ┣ 📜Collapse.js  
 ┃ ┃ ┣ 📜CollapsePanel.js  
 ┃ ┃ ┗ 📜index.js  
 ┃ ┣ 📂Documents  
 ┃ ┃ ┣ 📜DocumentStatus.js  
 ┃ ┃ ┣ 📜DocumentType.js  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┣ 📜Message.js  
 ┃ ┃ ┗ 📜UploadDocument.js  
 ┃ ┣ 📂FormFields  
 ┃ ┃ ┣ 📜CheckboxField.js  
 ┃ ┃ ┣ 📜FieldWrapper.js  
 ┃ ┃ ┣ 📜FormattedInput.js  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┣ 📜PasswordInput.js  
 ┃ ┃ ┣ 📜Radio.js  
 ┃ ┃ ┣ 📜RadioGroup.js  
 ┃ ┃ ┣ 📜SelectField.js  
 ┃ ┃ ┣ 📜TextAreaInput.js  
 ┃ ┃ ┗ 📜TextInput.js  
 ┃ ┣ 📂Header  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┗ 📜PageHeader.js  
 ┃ ┣ 📂Layout  
 ┃ ┃ ┣ 📜Col.js  
 ┃ ┃ ┣ 📜ContentWrap.js  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┣ 📜InnerWrap.js  
 ┃ ┃ ┣ 📜Row.js  
 ┃ ┃ ┗ 📜Separator.js  
 ┃ ┣ 📂Loader  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┣ 📜loader.css  
 ┃ ┃ ┗ 📜SpinLoader.js  
 ┃ ┣ 📂MenuItem  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┗ 📜MenuItem.js  
 ┃ ┣ 📂Message  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┗ 📜Message.js  
 ┃ ┣ 📂Modal  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┗ 📜Modal.js  
 ┃ ┣ 📂PaymentMethod  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┗ 📜PaymentMethod.js  
 ┃ ┣ 📂PaymentSummary  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┗ 📜PaymentSummary.js  
 ┃ ┣ 📂ScrollBar  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┗ 📜ScrollBar.js  
 ┃ ┣ 📂Spin  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┗ 📜Spin.js  
 ┃ ┣ 📂Styled  
 ┃ ┃ ┗ 📜index.js  
 ┃ ┣ 📂Tab  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┣ 📜Tab.js  
 ┃ ┃ ┗ 📜TabContent.js  
 ┃ ┣ 📂Table  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┗ 📜Table.js  
 ┃ ┣ 📂TableFilters  
 ┃ ┃ ┣ 📜DateRangeFilter.js  
 ┃ ┃ ┗ 📜index.js  
 ┃ ┣ 📂TaskInfo  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┗ 📜TaskInfo.js  
 ┃ ┣ 📂Tooltip  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┣ 📜Tooltip.js  
 ┃ ┃ ┗ 📜TooltipTitle.js  
 ┃ ┣ 📂Typography  
 ┃ ┃ ┣ 📜AmountText.js  
 ┃ ┃ ┣ 📜ChartInfo.js  
 ┃ ┃ ┣ 📜Heading4.js  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┣ 📜SubHeader.js  
 ┃ ┃ ┗ 📜TextBold.js  
 ┃ ┗ 📂Version  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┗ 📜Version.js  
 ┣ 📂config ***Configuration Directory***  
 ┃ ┗ 📜theme-config.js  
 ┣ 📂const ***Constants Directory***  
 ┃ ┣ 📜index.js  
 ┃ ┗ 📜state_options.js  
 ┣ 📂containers ***Container Components e.g. Layout***  
 ┃ ┣ 📂FormFields  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┗ 📜PaymentMethodRadio.js  
 ┃ ┗ 📂Layout  
 ┃ ┃ ┣ 📜Body.js  
 ┃ ┃ ┣ 📜Header.js  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┣ 📜Layout.js  
 ┃ ┃ ┣ 📜Menu.js  
 ┃ ┃ ┣ 📜MenuDrawer.js  
 ┃ ┃ ┗ 📜Sidebar.js  
 ┣ 📂contexts ***Contexts Directory***  
 ┃ ┣ 📂FeatureStatus  
 ┃ ┃ ┣ 📜FeatureContext.js  
 ┃ ┃ ┗ 📜FeatureProvider.js  
 ┃ ┣ 📂Loader  
 ┃ ┃ ┣ 📜LoaderContext.js  
 ┃ ┃ ┗ 📜LoaderProvider.js  
 ┃ ┣ 📂UserDetails  
 ┃ ┃ ┣ 📜UserDetailContext.js  
 ┃ ┃ ┗ 📜UserDetailProvider.js  
 ┃ ┣ 📜context-action-types.js  
 ┃ ┗ 📜index.js  
 ┣ 📂hooks ***Hooks Directory***  
 ┃ ┣ 📜index.js  
 ┃ ┣ 📜useClientDelete.js  
 ┃ ┣ 📜useClientUpdate.js  
 ┃ ┣ 📜useDisplayServerErrors.js  
 ┃ ┣ 📜useFetchBanks.js  
 ┃ ┣ 📜useFetchTransactions.js  
 ┃ ┣ 📜useLocalStorage.js  
 ┃ ┗ 📜useVerifilinkRedirect.js  
 ┣ 📂library ***Library Directory***  
 ┃ ┣ 📜index.js  
 ┃ ┗ 📜reactIntl.js  
 ┣ 📂locale ***Locale Directory, used for different versions text. E.g. Taxrise, Purgo***  
 ┃ ┣ 📜index.js  
 ┃ ┣ 📜purgoTexts.json  
 ┃ ┗ 📜taxriseTexts.json  
 ┣ 📂pages ***Pages/Screens Directory***  
 ┃ ┣ 📂Clients  
 ┃ ┃ ┣ 📂ClientContext  
 ┃ ┃ ┃ ┣ 📜ClientContext.js  
 ┃ ┃ ┃ ┗ 📜ClientProvider.js  
 ┃ ┃ ┣ 📂ClientDetails  
 ┃ ┃ ┃ ┣ 📜ClientDetails.js  
 ┃ ┃ ┃ ┣ 📜ClientProfile.js  
 ┃ ┃ ┃ ┗ 📜index.js  
 ┃ ┃ ┣ 📂FinancialTransaction `Financtial Summary Page`  
 ┃ ┃ ┃ ┣ 📜CategoryTransactions.js  
 ┃ ┃ ┃ ┣ 📜FinancialTransactions.js  
 ┃ ┃ ┃ ┣ 📜Incomes.js  
 ┃ ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┃ ┣ 📜Spending.js  
 ┃ ┃ ┃ ┣ 📜Transactions.js  
 ┃ ┃ ┃ ┣ 📜TransactionsTable.js  
 ┃ ┃ ┃ ┗ 📜VerifilinkIncomes.js  
 ┃ ┃ ┣ 📜Clients.js  
 ┃ ┃ ┗ 📜index.js  
 ┃ ┣ 📂Contact `Get in Touch Page`  
 ┃ ┃ ┣ 📜Contact.js  
 ┃ ┃ ┣ 📜ContactSuccess.js  
 ┃ ┃ ┗ 📜index.js  
 ┃ ┣ 📂Dashboard `Dashboard Page`  
 ┃ ┃ ┣ 📜ActivitiesTab.js  
 ┃ ┃ ┣ 📜CompletedTab.js  
 ┃ ┃ ┣ 📜Dashboard.js  
 ┃ ┃ ┣ 📜DashboardItem.js  
 ┃ ┃ ┣ 📜Dashboard_Old.js  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┗ 📜TasksTab.js  
 ┃ ┣ 📂Documents `Upload Documents Page`  
 ┃ ┃ ┣ 📜DocumentItem.js  
 ┃ ┃ ┣ 📜Documents.js  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┗ 📜RejectedDoc.js  
 ┃ ┣ 📂Faq `FAQ's Page`  
 ┃ ┃ ┣ 📜Faq.js  
 ┃ ┃ ┗ 📜index.js  
 ┃ ┣ 📂Login `Login Page`  
 ┃ ┃ ┣ 📜HardCodedLogin.js  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┗ 📜Login.js  
 ┃ ┣ 📂PaymentMethodStep `Payment Methods Page`  
 ┃ ┃ ┣ 📂AmazonPay  
 ┃ ┃ ┃ ┗ 📜Index.js  
 ┃ ┃ ┣ 📂BankDraft  
 ┃ ┃ ┃ ┣ 📜BankDraftAccount.js  
 ┃ ┃ ┃ ┣ 📜BankDraftOptions.js  
 ┃ ┃ ┃ ┣ 📜ExistingAccount.js  
 ┃ ┃ ┃ ┗ 📜index.js  
 ┃ ┃ ┣ 📂Card  
 ┃ ┃ ┃ ┣ 📜CardInformation.js  
 ┃ ┃ ┃ ┗ 📜index.js  
 ┃ ┃ ┣ 📂Paypal  
 ┃ ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┃ ┣ 📜PaypalCardInformation.js  
 ┃ ┃ ┃ ┗ 📜PaypalMethod.js  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┗ 📜PaymentOptions.js  
 ┃ ┣ 📂Payments `Payments Page`  
 ┃ ┃ ┣ 📜CurrentTab.js  
 ┃ ┃ ┣ 📜HistoryTab.js  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┣ 📜MakePayment.js  
 ┃ ┃ ┣ 📜Payments.js  
 ┃ ┃ ┗ 📜PaymentSuccess.js  
 ┃ ┣ 📂ResetPassword `Reset Password Page`  
 ┃ ┃ ┣ 📜EmailSendSuccess.js  
 ┃ ┃ ┣ 📜ForgotPassword.js  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┣ 📜PasswordReset.js  
 ┃ ┃ ┗ 📜ResetSuccess.js  
 ┃ ┣ 📂SignUpProcess `Sign Up Page`  
 ┃ ┃ ┣ 📜EmailResend.js  
 ┃ ┃ ┣ 📜EmailVerification.js  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┗ 📜SignUp.js  
 ┃ ┣ 📂Summary  
 ┃ ┃ ┣ 📂VerifilinkSummary `Verifilink Summary Page`  
 ┃ ┃ ┃ ┣ 📂AssetInvestment  
 ┃ ┃ ┃ ┃ ┣ 📜AdditionalPropertiesList.js  
 ┃ ┃ ┃ ┃ ┣ 📜AdditionalVehiclesList.js  
 ┃ ┃ ┃ ┃ ┣ 📜AssetInvestmentSummary.js  
 ┃ ┃ ┃ ┃ ┣ 📜FinancedPropertiesList.js  
 ┃ ┃ ┃ ┃ ┣ 📜FinancedVehiclesList.js  
 ┃ ┃ ┃ ┃ ┗ 📜InvestmentAccounts.js  
 ┃ ┃ ┃ ┣ 📂Employment  
 ┃ ┃ ┃ ┃ ┣ 📜BothEmployment.js  
 ┃ ┃ ┃ ┃ ┣ 📜EmploymentSummary.js  
 ┃ ┃ ┃ ┃ ┣ 📜Retired.js  
 ┃ ┃ ┃ ┃ ┣ 📜SelfEmployed.js  
 ┃ ┃ ┃ ┃ ┣ 📜UnEmployed.js  
 ┃ ┃ ┃ ┃ ┗ 📜W2Employment.js  
 ┃ ┃ ┃ ┣ 📜BankAccountsSummary.js  
 ┃ ┃ ┃ ┣ 📜HouseholdSummary.js  
 ┃ ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┃ ┣ 📜PersonalInfoSummary.js  
 ┃ ┃ ┃ ┗ 📜VerifilinkSummary.js  
 ┃ ┃ ┣ 📜Download433a.js  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┗ 📜Summary.js  
 ┃ ┣ 📂Transcript `Transcript Summary Page`  
 ┃ ┃ ┣ 📂Filed  
 ┃ ┃ ┃ ┣ 📜FiledPanelContent.js  
 ┃ ┃ ┃ ┣ 📜FiledPanelHeader.js  
 ┃ ┃ ┃ ┗ 📜FiledYears.js  
 ┃ ┃ ┣ 📂Unfiled  
 ┃ ┃ ┃ ┣ 📜UnfiledPanelContent.js  
 ┃ ┃ ┃ ┣ 📜UnfiledPanelHeader.js  
 ┃ ┃ ┃ ┗ 📜UnfiledYears.js  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┣ 📜IrsTable.js  
 ┃ ┃ ┣ 📜styled.js  
 ┃ ┃ ┗ 📜Transcript.js  
 ┃ ┗ 📜index.js  
 ┣ 📂routes ***Routes Directory***  
 ┃ ┣ 📜index.js  
 ┃ ┣ 📜paths.js  
 ┃ ┣ 📜PrivateLayout.js  
 ┃ ┣ 📜PrivateRoute.js  
 ┃ ┣ 📜PublicLayout.js  
 ┃ ┣ 📜PublicRoute.js  
 ┃ ┗ 📜Routes.js  
 ┣ 📂styles ***Styles Directory***  
 ┃ ┣ 📜app.less  
 ┃ ┣ 📜GlobalStyles.js  
 ┃ ┣ 📜styleConfig.js  
 ┃ ┗ 📜variables.less  
 ┣ 📂utilities  
 ┃ ┣ 📜ErrorFallback.js  
 ┃ ┣ 📜FormattedText.js  
 ┃ ┣ 📜index.js  
 ┃ ┣ 📜NotAuthorized.js  
 ┃ ┣ 📜PageNotFound.js  
 ┃ ┗ 📜ScrollToTop.js  
 ┣ 📜App.js  
 ┣ 📜App.test.js  
 ┣ 📜index.js  
 ┣ 📜reportWebVitals.js  
 ┗ 📜setupTests.js  