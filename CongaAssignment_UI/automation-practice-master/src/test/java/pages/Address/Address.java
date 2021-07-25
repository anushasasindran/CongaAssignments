package pages.Address;

import configuration.PageBase;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import utils.CRUD.User;

public class Address extends PageBase {
    private AddressElements webElements;

    private Address(WebDriver driver){
        super(driver);
    }

    public static Address of(WebDriver driver){
        return new Address(driver);
    }

    
    private By ProceedToCheckoutButton() { return By.cssSelector(webElements.PROCEED_TO_CHECKOUT_BUTTON); }
 
    public Address clickProceedToCheckoutButton(){
        click(ProceedToCheckoutButton());
        return this;
    }
    
}
