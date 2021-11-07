package com.example.invoiceprinter.view;

import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class InvoiceDetails {
    private LocalDate currentDate= LocalDate.now();
    private String invoiceNumber;

    public LocalDate getCurrentDate() {
        return currentDate;
    }

    public void setCurrentDate(LocalDate currentDate) {
        this.currentDate = currentDate;
    }

    public String getInvoiceNumber() {
        return invoiceNumber;
    }

    public void setInvoiceNumber(String invoiceNumber) {
        this.invoiceNumber = invoiceNumber;
    }
}
