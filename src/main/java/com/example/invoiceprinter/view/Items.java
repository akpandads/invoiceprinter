package com.example.invoiceprinter.view;

public enum Items {
    NONE(""),
    ITEM1 ("Item 1"),
    ITEM2 ("Item 2"),
    ITEM3("Item 3" );

    public String displayValue;

    Items(String value){
        this.displayValue=value;
    }

    public void setDisplayValue(String displayValue) {
        this.displayValue = displayValue;
    }
}
