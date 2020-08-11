package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition {

	WebDriver driver;

	@Given("^user is already on Login Page$")
	public void user_already_on_login_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\kbish\\eclipse-workspace\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.freecrm.com/index.html");
		driver.manage().window().maximize();
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Free CRM software can boost your sales by 30%", title);
	}

	@When("^title of login page is Free CRM$")
	public void title_of_login_page_is_free_CRM() {
		driver.findElement(By.xpath("//*[@id=\"navbar-collapse\"]/ul/li[1]/a")).click();
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Cogmento CRM", title);

	}

	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username, String password) {
		driver.findElement(By.xpath("//*[@ name='email']")).sendKeys(username);
		driver.findElement(By.xpath("//*[@ name='password']")).sendKeys(password);
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() throws InterruptedException {
		WebElement loginBtn = driver.findElement(By.xpath("//*[@id=\"ui\"]/div/div/form/div/div[3]"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", loginBtn);
		Thread.sleep(3000);
	}

	@Then("^verify login failed message$")
	public void verify_login_failed_message() {
		// String title =
		// (driver.findElement(By.xpath("//*[@id=\"ui\"]/div/div/form/div/div[3]/p")));
		// System.out.println("Home Page title ::" + title);
		// Assert.assertEquals("CRMPRO", title);

		String bodyText = driver.findElement(By.xpath("//*[@id=\"ui\"]/div/div/form/div/div[3]/p")).getText();
		Assert.assertEquals(bodyText, "Invalid login");
		System.out.println("invalied login messaged verified successfully>- Test passed");

	}

	@Then("^Close the browser$")
	public void close_the_browser() {
		driver.close();
	}

}
