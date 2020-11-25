package gmibank.pojos;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import org.apache.commons.lang.builder.ToStringBuilder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "name",
        "tpcountry"
})
public class States {

    @JsonProperty("name")
    private String name;
    @JsonProperty("tpcountry")
    private String tpcountry;

    /**
     * No args constructor for use in serialization
     *
     */
    public States() {
    }

    /**
     *
     * @param tpcountry
     * @param name
     */
    public States(String name, String tpcountry) {
        super();
        this.name = name;
        this.tpcountry = tpcountry;
    }

    @JsonProperty("name")
    public String getName() {
        return name;
    }

    @JsonProperty("name")
    public void setName(String name) {
        this.name = name;
    }

    @JsonProperty("tpcountry")
    public String getTpcountry() {
        return tpcountry;
    }

    @JsonProperty("tpcountry")
    public void setTpcountry(String tpcountry) {
        this.tpcountry = tpcountry;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this).append("name", name).append("tpcountry", tpcountry).toString();
    }

}