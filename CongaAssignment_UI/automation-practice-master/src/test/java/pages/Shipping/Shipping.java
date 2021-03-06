package pages.Shipping;

import configuration.PageBase;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import utils.CRUD.Cart;

public class Shipping extends PageBase {
    private ShippingElements webElements;

    private Shipping(WebDriver driver){
        super(driver);
    }

    public static Shipping of(WebDriver driver){
        return new Shipping(driver);
    }

    
    private By ShippingPriceLabel() { return By.cssSelector(webElements.SHIPPING_PRICE_LABEL); }
    private By TermsOfServiceCheckbox() { return By.cssSelector(webElements.TERMS_OF_SERVICE_CHECKBOX); }
    private By ProceedToCheckoutButton() { return By.cssSelector(webElements.PROCEED_TO_CHECKOUT_BUTTON); }
    
    public Shipping validateShippingPrice(Cart cart){
        waitForElement(ShippingPriceLabel());
        assertEquals(ShippingPriceLabel(), driver.findElement(ShippingPriceLabel()).getText()
                .replace("$", ""), String.format("%.02f", cart.getShipping())
                .replaceAll(",","."));
        return this;
    }
    public Shipping acceptTermsOfService(){
        jsClick(TermsOfServiceCheckbox());
        return this;
    }
    public Shipping clickProceedToCheckoutButton(){
        click(ProceedToCheckoutButton());
        return this;
    }
    
}
