package workflows;

import configuration.PageBase;
import org.openqa.selenium.WebDriver;

import pages.AddToCart.AddToCart;
import pages.Address.Address;
import pages.CartSummary.CartSummary;
import pages.ConfirmationCard.ConfirmationCard;
import pages.Home.Home;
import pages.MenuLoggedIn.MenuLoggedIn;
import pages.Payment.Payment;
import pages.ProductDetails.ProductDetails;
import pages.ProductSelect.ProductSelect;
import pages.Shipping.Shipping;
import pages.SignIn.SignIn;
import utils.CRUD.Cart;
import utils.CRUD.User;

public class Workflow extends PageBase {
    private Cart cart;

    private Workflow(WebDriver driver) {
        super(driver);
        cart = new Cart();
    }

    public static Workflow of(WebDriver driver) {
        return new Workflow(driver);
    }

 
    public Workflow validateProductAdded(User user) {
        Home.of(driver)
                 .clickSignInButton();
       
        SignIn.of(driver)
        .fillDetails(user)
        .clickSubmitButton();
        ProductSelect.of(driver)
                .clickProduct();
        AddToCart.of(driver)
                .clickAddToCart();
        cart = ProductDetails.of(driver)
                .enterQuantity()
                .chooseSize()
                .chooseColor()
                .saveProductInfo()
                .addToCart()
                .cart;
        ConfirmationCard.of(driver)
                .validateConfirmation()
                .validateProductInformation(cart.getProducts().get(cart.getProducts().size() - 1))
                .validateCartInformation(cart)
                .clickProceedToCheckoutButton();
        validateProductInformation()
        .validateCartInformationWithTax(cart)
        .clickProceedToCheckoutButton();
        Address.of(driver)
        .clickProceedToCheckoutButton();
Shipping.of(driver)
        .validateShippingPrice(cart)
        .acceptTermsOfService()
        .clickProceedToCheckoutButton();
validateProductInformation().validateCartInformationWithoutTax(cart);
Payment.of(driver)
        .choosePaymentMethod()
        .clickConfirmOrderButton()
        .validateOrderConfirmation();
MenuLoggedIn.of(driver)
        .clickLogoutButton();
        return this;
    }
   
    private CartSummary validateProductInformation(){
        return CartSummary.of(driver)
                .validateProductInformation(cart);
    }
 
}
