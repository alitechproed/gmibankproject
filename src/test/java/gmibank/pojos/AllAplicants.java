package gmibank.pojos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class AllAplicants {

    private List<NewApplicant> applicants;


    public List<NewApplicant> getApplicants() {
        return applicants;
    }

    public void setApplicants(List<NewApplicant> applicants) {
        this.applicants = applicants;
    }






}
