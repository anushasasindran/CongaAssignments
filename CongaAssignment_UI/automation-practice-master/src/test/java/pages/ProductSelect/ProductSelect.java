package pages.ProductSelect;
import configuration.PageBase;
import pages.SignIn.SignIn;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import utils.CommonMethods;

import java.util.List;
public class ProductSelect extends PageBase {

	    private ProductSelectElements webElements;

	    private ProductSelect(WebDriver driver){
	        super(driver);
	        this.webElements = new ProductSelectElements();
	    }

	    public static ProductSelect of(WebDriver driver){
	        return new ProductSelect(driver);
	    }

	 
	    
	    private By product_select(){ return By.cssSelector(webElements.TShirt_Select); }



	    
	    public ProductSelect clickProduct(){
	        click(product_select());
	        return this;
	    }
	    
	}


