package pages.Home;

import configuration.PageBase;
import pages.SignIn.SignIn;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import utils.CommonMethods;

import java.util.List;

public class Home extends PageBase {
    private HomeElements webElements;

    private Home(WebDriver driver){
        super(driver);
        this.webElements = new HomeElements();
    }

    public static Home of(WebDriver driver){
        return new Home(driver);
    }

    private By SignIn(){ return By.cssSelector(webElements.SIGN_IN); }

    
    public Home clickSignInButton(){
        click(SignIn());
        return this;
    }
   
}
