package com.example.invoiceprinter.model;

public enum Category {
    NONE(""),
    CONSULTATION ("Consultation Charges"),
    DIAGNOSTIC ("Diagnostic Tests"),
    OTHERS("Others " );

    public String displayValue;

    Category(String value){
        this.displayValue=value;
    }

    public void setDisplayValue(String displayValue) {
        this.displayValue = displayValue;
    }
}
