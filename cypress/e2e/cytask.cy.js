/// <reference types="Cypress" />
import { general } from "../page_obejcts/general";

describe("Cypress Task | Task 1 ", () => {
  beforeEach(() => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.url().should(
      "contain",
      "https://rahulshettyacademy.com/AutomationPractice/"
    );
    general.headerTitle.should("be.visible");
  });
  it("Task 2 positive | Select all radio buttons", () => {
    general.RBE();
  });
  it("Task 2.1 negative | Leave all Unchecked", () => {
    general.RBEleaveAllUnschecked();
  });
  it("Task 2.2 negative | Check only 1", () => {
    general.RBECheckOnly1();
  });
  it("Task 2.3 negative | Check only second and uncheck first", () => {
    general.RBECheckOnlySecondAndUncheckFirst();
  });
  it("Task 3 positive | Start type 'Braz' and select 'Brazil'", () => {
    general.SuggestionCE();
  });
  it("Task 3 negative | Enter random number", () => {
    general.SuggestionCE1();
  });
  it("Task 4 positive | Select all options from Dropdown ", () => {
    general.dropdownExmplSelect();
  });
  it("Task 4 negative | Click on dropdown and choose 'Select' ", () => {
    general.dropdownExmplSelect1();
  });
  it("Task 4.1 negative | Verify that only 1 option can be selected ", () => {
    general.dropdownExmplSelect2();
    // it could be maybe positive case
  });
  it("Task 4.2 negative | Try to edit dropdown options ", () => {
    general.dropdownExmplSelect3();
  });
  it("Task 5 positive | Check all  ", () => {
    general.checkBoxes();
  });
  it("Task 5 negative | Leave all unchecked ", () => {
    general.leaveAllUnchecked();
  });
  it("Task 5.1 negative | Check only first ", () => {
    general.checkOnlyFirst();
  });
  it("Task 5.2 negative | Check last two ", () => {
    general.checkLastTwo();
  });
  it("Task 6 positive | Enter 'Dragan' and click on Alert btn ", () => {
    general.SwitchToAlertExample1();
  });
  it("Task 6.1 positive | Enter 'Ralic' and click on Confirm btn ", () => {
    general.SwitchToAlertExample2();
  });
  it("Task 6 negative | Click on Alert btn without enter any text ", () => {
    general.SwitchToAlertExample3();
  });
  it("Task 6.1 negative | Click on Confirm btn without enter any text ", () => {
    general.SwitchToAlertExample4();
  });
  it("Task 7 positive | Verify Hide/Show paceholder is visible by defeault then click on Hide/Show Btns ", () => {
    general.HideShowFunction();
  });

  it("Task 8 positive | Hover over Mouse Hover btn and click on Top/Reload", () => {
    general.MouseHover();
  });
  it("Task 9 | Verify that 'WebServices/REST API' course has a price of 35 ", () => {
    general.WebTableVerify();
  });
  it("Task 10 | Test the 'Broken Link'in footer section ", () => {
    general.BrokenLink();
  });
  // It would be better to use cy.request in Task 10, and Assert it by expect 404 Status Code, but not possible
});
