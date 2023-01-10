"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2918],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=o,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||a;return n?i.createElement(m,r(r({ref:t},p),{},{components:n})):i.createElement(m,r({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},38170:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var i=n(87462),o=n(63366),a=(n(67294),n(3905)),r=["components"],s={},l="Unit Tests",c={unversionedId:"Engineering/FrontEnd/Testing/UnitTesting",id:"Engineering/FrontEnd/Testing/UnitTesting",title:"Unit Tests",description:"Frameworks",source:"@site/docs/Engineering/FrontEnd/Testing/UnitTesting.md",sourceDirName:"Engineering/FrontEnd/Testing",slug:"/Engineering/FrontEnd/Testing/UnitTesting",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/Testing/UnitTesting",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Translations",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/Internationalization/Translations"},next:{title:"Build Automation Overview",permalink:"/va-mobile-app/docs/Engineering/DevOps/Overview"}},p=[{value:"Frameworks",id:"frameworks",children:[],level:2},{value:"What to Test",id:"what-to-test",children:[{value:"What Not To Test",id:"what-not-to-test",children:[],level:3}],level:2},{value:"Test Files",id:"test-files",children:[],level:2},{value:"Running Tests",id:"running-tests",children:[],level:2},{value:"Test Structure",id:"test-structure",children:[],level:2},{value:"Mocking",id:"mocking",children:[{value:"Mocking Hooks",id:"mocking-hooks",children:[],level:3},{value:"Mocking API Calls",id:"mocking-api-calls",children:[],level:3}],level:2}],u={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"unit-tests"},"Unit Tests"),(0,a.kt)("h2",{id:"frameworks"},"Frameworks"),(0,a.kt)("p",null,"Our tests primarily use ",(0,a.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")," and ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/test-renderer.html"},"React Test Renderer")),(0,a.kt)("h2",{id:"what-to-test"},"What to Test"),(0,a.kt)("p",null,"All React components including common components and screens should have an associated unit test. The test should cover the visible effects of logic within the component as well as any output from the component passed through events like buttons where possible.\nExamples of this include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Verifying expected results when pressing a button including showing/hiding elements or calling actions"),(0,a.kt)("li",{parentName:"ul"},"Verifying props are having the expected effect within the component"),(0,a.kt)("li",{parentName:"ul"},"Error states displaying as expected"),(0,a.kt)("li",{parentName:"ul"},"Edge cases that may not be noticed in day to day development or regular QA cycles"),(0,a.kt)("li",{parentName:"ul"},"Validation on forms")),(0,a.kt)("h3",{id:"what-not-to-test"},"What Not To Test"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Interactions with or effects within other components or screens that require pulling in those screens or components."),(0,a.kt)("li",{parentName:"ul"},"The actions being called (such as API calls), it should only be testing that the actions are called with the correct parameters. These actions should be tested in their own set of unit tests."),(0,a.kt)("li",{parentName:"ul"},"Functionality of third party libraries that the component is not directly responsible for. These should be mocked appropriately to isolate the test to logic within the component.")),(0,a.kt)("h2",{id:"test-files"},"Test Files"),(0,a.kt)("p",null,"The test file should live in the same location as its associated component with the same file name with .test included after the component name."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ClaimsScreen.tsx")," will have a test file named ",(0,a.kt)("inlineCode",{parentName:"p"},"ClaimsScreen.test.tsx")),(0,a.kt)("h2",{id:"running-tests"},"Running Tests"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Run unit tests with ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn test")),(0,a.kt)("li",{parentName:"ul"},"Coverage can be found under ",(0,a.kt)("inlineCode",{parentName:"li"},"coverage/lcov-report/index.html"))),(0,a.kt)("h2",{id:"test-structure"},"Test Structure"),(0,a.kt)("p",null,"Unit tests are structured into ",(0,a.kt)("inlineCode",{parentName:"p"},"context"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"describe"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"it")," functions that provide context to the tests as they are run. These are presented as a readable heirarchy, making it easy to follow the output of the tests and identify where failing tests are and what they were testing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"context('MyScreen', () => {\n  describe('when loading is set to true', () => {\n    it('should show loading screen', async () => {\n      // testing\n    })\n\n    it('should not show a menu', async () => {\n      // testing\n    })\n  })\n})\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," is typically the name of the component or screen, the primary identifier of what this file is testing. ",(0,a.kt)("inlineCode",{parentName:"p"},"describe")," provides a specific circumstance or set of properties. ",(0,a.kt)("inlineCode",{parentName:"p"},"it")," explains exactly what is being tested. A ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," can have as many ",(0,a.kt)("inlineCode",{parentName:"p"},"describe")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"it")," functions as is necessary to describe the flow of the test."),(0,a.kt)("h2",{id:"mocking"},"Mocking"),(0,a.kt)("p",null,"Components often interact with other pieces of code that are not the responsibility of that unit test, but rely on them to function. To handle these cases, we use mocks to guarantee inputs and outputs of things like navigation actions, API calls, external libraries, hooks, or anything else the component might need but does not control the logic of."),(0,a.kt)("p",null,"Mocking libraries and functions are done through ",(0,a.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/mock-functions"},"jest mocks"),". Global mocks can be found at ",(0,a.kt)("inlineCode",{parentName:"p"},"jest/testSetup.ts")," but can be overridden within the individual test files."),(0,a.kt)("h3",{id:"mocking-hooks"},"Mocking Hooks"),(0,a.kt)("p",null,"One of the most commonly mocked parts of the app are hooks related to things like navigation, theme, and alerts. This is done by creating a spy object at the top of the file that will then be set in the jest mocks to allow it to be used within the tests."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"let mockNavigationSpy = jest.fn()\njest.mock('utils/hooks', () => {\n  let original = jest.requireActual('utils/hooks')\n  return {\n    ...original,\n    useRouteNavigation: () => {\n      return mockNavigationSpy\n    },\n  }\n})\n")),(0,a.kt)("p",null,"This block of code will mock the entirety of the hooks util file using the original implementations except for the useRouteNavigation hook, which is instead returning a spy object that the unit test can use to verify it was called with the correct arguments."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"navigateToPaymentMissingSpy = jest.fn()\n\nwhen(mockNavigationSpy)\n      .mockReturnValue(() => {})\n      .calledWith('PaymentMissing')\n      .mockReturnValue(navigateToPaymentMissingSpy)\n")),(0,a.kt)("p",null,"This will create another object  ",(0,a.kt)("inlineCode",{parentName:"p"},"navigateToPaymentMissingSpy")," that will be returned if the hook is called with the parameters ",(0,a.kt)("inlineCode",{parentName:"p"},"'PaymentMissing'")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// Do something that will trigger a navigation to the PaymentMissing screen\nexpect(navigateToPaymentMissingSpy).toHaveBeenCalled()\n")),(0,a.kt)("h3",{id:"mocking-api-calls"},"Mocking API Calls"),(0,a.kt)("p",null,"Components will often make API calls which can be mocked via the redux actions that call them."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { downloadLetter } from 'store/slices'\n\njest.mock('store/slices', () => {\n  let actual = jest.requireActual('store/slices')\n  return {\n    ...actual,\n    downloadLetter: jest.fn(() => {\n      return {\n        type: '',\n        payload: '',\n      }\n    }),\n  }\n})\n")),(0,a.kt)("p",null,"This imports the ",(0,a.kt)("inlineCode",{parentName:"p"},"downloadLetter")," action from the letters slice responsible for handling downloading letters and mocks it to do nothing. This will let the unit test validate it has been called without the test itself trying to actually download anything."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// Do something that triggers downloading of a letter with some set of options\n\nconst letterOptions = {\n  chapter35Eligibility: true,\n  militaryService: true,\n  monthlyAward: true,\n  serviceConnectedDisabilities: true,\n  serviceConnectedEvaluation: true,\n}\nexpect(downloadLetter).toBeCalledWith(LetterTypeConstants.benefitSummary, letterOptions)\n")),(0,a.kt)("p",null,"This checks to see that the ",(0,a.kt)("inlineCode",{parentName:"p"},"downloadLetter")," action was called with the expected parameters"))}h.isMDXComponent=!0}}]);