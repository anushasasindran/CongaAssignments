package utils.CRUD;

public class User {
    private String email;
    private String firstName;
    private String lastName;
    private String password;
    private String address;
    private String city;
    private String postalCode;
    private String mobilePhone;
    private String state;
    private String country;
    
    public User(String email, String password) {
    	email ="abc@test.com";
    	password = "test";
    }

    public User(String email, String firstName, String lastName, String password, String address, String city, String postalCode, String mobilePhone) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.address = address;
        this.city = city;
        this.postalCode = postalCode;
        this.mobilePhone = mobilePhone;
    }

    public String getEmail() {
        return email = "jetblue@grr.la";
    }

    public void setEmail(String email) {
        //this.email = email;
    	this.email = "abc@test.com";
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPassword() {
        return password = "jetblue";
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getMobilePhone() {
        return mobilePhone;
    }

    public void setMobilePhone(String mobilePhone) {
        this.mobilePhone = mobilePhone;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }
}
