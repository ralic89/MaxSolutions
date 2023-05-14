import { faker } from "@faker-js/faker";

const fakedData = {
    randomNubmer: faker.datatype.number(3),
  };

class General {
  get headerTitle() {
    return cy.get("h1");
  }

  get radioButton1() {
    return cy.get("[for='radio1'] .radioButton");
  }
  get radioButton2() {
    return cy.get("[for='radio2'] .radioButton");
  }
  get radioButton3() {
    return cy.get("[for='radio3'] .radioButton");
  }
  get typeToSelectCountries() {
    return cy.get("[placeholder='Type to Select Countries']");
  }

  RBE() {
    this.radioButton1.click().should("be.checked");
    this.radioButton2.click().should("be.checked");
    this.radioButton3.click().should("be.checked");
  }
  RBEleaveAllUnschecked() {
    this.radioButton1.should("be.visible").should("not.be.checked");
    this.radioButton2.should("be.visible").should("not.be.checked");
    this.radioButton3.should("be.visible").should("not.be.checked");
  }
  RBECheckOnly1() {
    this.radioButton1.click().should("be.checked");
    this.radioButton2.should("be.visible").should("not.be.checked");
    this.radioButton3.should("be.visible").should("not.be.checked");
  }
  RBECheckOnlySecondAndUncheckFirst() {
    this.radioButton1.click().should("be.checked");
    this.radioButton2.click().should("be.checked");
    this.radioButton1.should("not.be.checked");
  }
  SuggestionCE () {
    cy.get("[placeholder='Type to Select Countries']").type("Braz");
    cy.get(".ui-menu-item-wrapper").should("be.visible");
  }
  SuggestionCE1 (){
    cy.get("[placeholder='Type to Select Countries']").type(
        fakedData.randomNubmer
      );
      cy.get("[placeholder='Type to Select Countries']").should(
        "have.have.value",
        fakedData.randomNubmer
      );
  }

  dropdownExmplSelect() {
    cy.get("select").select("option1").should("have.value", "option1");
    cy.wait(2000);
    cy.get("select").select("option2").should("have.value", "option2");
    cy.wait(2000);
    cy.get("select").select("option3").should("have.value", "option3");
  }
  dropdownExmplSelect2() {
    cy.get("select").select("option1").select("option2").select("option3").should("have.value", "option3");

  }
  dropdownExmplSelect1 () {
    cy.get("select").should("have.value", "")
  }
  dropdownExmplSelect3 () {
    cy.get("select").type('abc').should("not.have.value", "abc");
  }
  checkBoxes() {
    cy.get("#checkBoxOption1").check().should("be.checked");
    cy.get("#checkBoxOption2").check().should("be.checked");
    cy.get("#checkBoxOption3").check().should("be.checked");
  }
  leaveAllUnchecked() {
    cy.get("#checkBoxOption1").should("not.be.checked");
    cy.get("#checkBoxOption2").should("not.be.checked");
    cy.get("#checkBoxOption3").should("not.be.checked");
  }
  checkOnlyFirst() {
    cy.get("#checkBoxOption1").check().should("be.checked");
    cy.get("#checkBoxOption2").should("not.be.checked");
    cy.get("#checkBoxOption3").should("not.be.checked");
  }
  checkLastTwo() {
    cy.get("#checkBoxOption1").should("not.be.checked");
    cy.get("#checkBoxOption2").check().should("be.checked");
    cy.get("#checkBoxOption3").check().should("be.checked");
  }
  get enterYourNamePlaceholder() {
    return cy.get("input#name");
  }
  get alertBtn() {
    return cy.get("input#alertbtn");
  }
  get confirmBtn() {
    return cy.get("input#confirmbtn");
  }

  SwitchToAlertExample1() {
    this.enterYourNamePlaceholder.type("Dragan");
    this.alertBtn.click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Hello Dragan, share this practice page and share your knowledge"
      );
    });
    
  }
  SwitchToAlertExample3() {
    this.alertBtn.click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });
    
  }
  SwitchToAlertExample2() {
    this.enterYourNamePlaceholder.type("Ralic");
    this.confirmBtn.click();
    cy.on("window:confirm", (str) => {
      expect(str).to.equal("Hello Ralic, Are you sure you want to confirm?");
    });
  }
  SwitchToAlertExample4() {
    this.confirmBtn.click();
    cy.on("window:confirm", (str) => {
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });
  }

  HideShowFunction() {
    cy.get("input#displayed-text").should("be.visible");
    cy.get("input#hide-textbox").click();
    cy.get("input#displayed-text").should("not.be.visible");
    cy.get("input#show-textbox").click();
    cy.get("input#displayed-text").should("be.visible");
  }
  MouseHover() {
    cy.get(".mouse-hover-content").invoke("show");
    cy.contains("Top").click();
    cy.url().should("include", "top");
    cy.contains("Reload").click();
    cy.url().should(
      "contain",
      "https://rahulshettyacademy.com/AutomationPractice/"
    );
  }
  WebTableVerify() {
    cy.get("tr td:nth-child(2)").each(($e1, i, $list) => {
      const storeText = $e1.text();
      if (storeText.includes("WebServices")) {
        cy.get("tr td:nth-child(2)")
          .eq(i)
          .next()
          .then(function (Assigneecolumn) {
            const assigneeText = Assigneecolumn.text();
            expect(assigneeText).to.equals("35");
          });
      }
    });
  }
  BrokenLink() {
    cy.contains("Broken Link").click();
    cy.url().should("contain", "brokenlink");
    cy.get(
      "[class='px-4 text-lg text-gray-500 border-r border-gray-400 tracking-wider']"
    ).should("be.visible");
  }
}
export const general = new General();
