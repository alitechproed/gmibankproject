package gmibank.pojos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import org.apache.commons.lang.builder.ToStringBuilder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "name",
        "states"
})

@JsonIgnoreProperties(ignoreUnknown = true)
public class Country {

    @JsonProperty("name")
    private String name;
    @JsonProperty("states")
    private Object states;

    /**
     * No args constructor for use in serialization
     *
     */
    public Country() {
    }

    /**
     *
     * @param name
     * @param states
     */
    public Country(String name, Object states) {
        super();
        this.name = name;
        this.states = states;
    }

    @JsonProperty("name")
    public String getName() {
        return name;
    }

    @JsonProperty("name")
    public void setName(String name) {
        this.name = name;
    }

    @JsonProperty("states")
    public Object getStates() {
        return states;
    }

    @JsonProperty("states")
    public void setStates(Object states) {
        this.states = states;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this).append("name", name).append("states", states).toString();
    }

}