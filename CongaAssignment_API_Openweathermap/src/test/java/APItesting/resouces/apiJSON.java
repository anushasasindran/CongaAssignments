package APItesting.resouces;

public interface apiJSON {

	   enum fields { EXTERNAL_ID("external_id"),
           NAME("name"),
           LATITUDE("latitude"),
           LONGITUDE("longitude"),
           ALTITUDE("altitude"),
           ID("ID");
 private String associatedText;

 fields(String associatedText) { this.associatedText = associatedText; }

 @Override
 public String toString() {
     return this.associatedText;
 }

};

}
