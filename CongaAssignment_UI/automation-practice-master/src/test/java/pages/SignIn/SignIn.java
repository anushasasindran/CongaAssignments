package pages.SignIn;

import configuration.PageBase;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import utils.CRUD.User;

public class SignIn extends PageBase {
    private SignInElements webElements;

    private SignIn(WebDriver driver){
        super(driver);
    }

    public static SignIn of(WebDriver driver){
        return new SignIn(driver);
    }

    private By EmailInput() { return By.cssSelector(webElements.EMAIL_INPUT); }
   
    private By PasswordInput() { return By.cssSelector(webElements.PASSWORD_INPUT); }
    
    private By SubmitButton() { return By.cssSelector(webElements.SUBMIT_BUTTON ); }
   
    public SignIn fillDetails(User user) {
    	fillString(EmailInput(),user.getEmail());
    	fillString(PasswordInput(),user.getPassword());
    	return this;
    }
    public SignIn clickSubmitButton(){
        click(SubmitButton());
        return this;
    }
 
}
