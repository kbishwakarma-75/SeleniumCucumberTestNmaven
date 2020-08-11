$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/kbish/eclipse-workspace/CucumberFramework/Features/LetsKodeit_Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Fucntion Test",
  "description": "Description: This feature is to validate login functionality.",
  "id": "login-fucntion-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-fucntion-test;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Open the Browser Successful Login",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter the URL for Successful Login",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on Sign up or Login Link Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enter Valid Username and Password Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on Login Button Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify User must see All Courses",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Logout Successful",
  "keyword": "And "
});
formatter.match({
  "location": "LetsKoditStepDefinition.open_the_Browser_Successful_Login()"
});
formatter.result({
  "duration": 11743023600,
  "status": "passed"
});
formatter.match({
  "location": "LetsKoditStepDefinition.enter_the_URL_for_Successful_Login()"
});
formatter.result({
  "duration": 3485906900,
  "status": "passed"
});
formatter.match({
  "location": "LetsKoditStepDefinition.click_on_Sign_up_or_Login_Link_Successful_Login()"
});
formatter.result({
  "duration": 2965571400,
  "status": "passed"
});
formatter.match({
  "location": "LetsKoditStepDefinition.enter_Valid_Username_and_Password_Successful_Login()"
});
formatter.result({
  "duration": 513692000,
  "status": "passed"
});
formatter.match({
  "location": "LetsKoditStepDefinition.click_on_Login_Button_Successful_Login()"
});
formatter.result({
  "duration": 2360709900,
  "status": "passed"
});
formatter.match({
  "location": "LetsKoditStepDefinition.verify_User_must_see_All_Courses()"
});
formatter.result({
  "duration": 137884200,
  "status": "passed"
});
formatter.match({
  "location": "LetsKoditStepDefinition.logout_Successful()"
});
formatter.result({
  "duration": 3169893700,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Unsuccessful Login with Invalid Credentials",
  "description": "",
  "id": "login-fucntion-test;unsuccessful-login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "User on Complete Test Automation Bundle Page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Click on Sign In Link Unccessful Login",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Enter Invalid Username and Password Unccessful Login",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify Invlaid Message Displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Close Application",
  "keyword": "And "
});
formatter.match({
  "location": "LetsKoditStepDefinition.user_on_Complete_Test_Automation_Bundle_Page()"
});
formatter.result({
  "duration": 2352600,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat stepDefinitions_LetsKodeit.LetsKoditStepDefinition.user_on_Complete_Test_Automation_Bundle_Page(LetsKoditStepDefinition.java:91)\r\n\tat ✽.Given User on Complete Test Automation Bundle Page(C:/Users/kbish/eclipse-workspace/CucumberFramework/Features/LetsKodeit_Login.feature:15)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "LetsKoditStepDefinition.click_on_Sign_In_Link_Unccessful_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LetsKoditStepDefinition.enter_Invalid_Username_and_Password_Unccessful_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LetsKoditStepDefinition.verify_Invlaid_Message_Displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LetsKoditStepDefinition.close_Application()"
});
formatter.result({
  "status": "skipped"
});
});