package pages.AddToCart;
import configuration.PageBase;
import pages.ProductSelect.ProductSelect;
import pages.ProductSelect.ProductSelectElements;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class AddToCart extends PageBase {

	private AddToCartElements webElements;

    private AddToCart(WebDriver driver){
        super(driver);
        this.webElements = new AddToCartElements();
    }

    public static AddToCart of(WebDriver driver){
        return new AddToCart(driver);
    }

    
    private By Addcart(){ return By.cssSelector(webElements.Add_to_cart); }

    
    public AddToCart clickAddToCart(){
        click(Addcart());
        return this;
    }
   
}