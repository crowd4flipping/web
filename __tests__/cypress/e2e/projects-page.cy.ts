describe("On Page '/proyectos'", () => {
  it("must be a status query param", () => {
    const projectsPath = "/proyectos";

    cy.visit(projectsPath);
    cy.get("button").contains("En estudio").click({ force: true });
    cy.wait(5000);
    cy.url().should("include", "?status=in_study");
    cy.visit(projectsPath.concat("?status=finished"));
    cy.get(".project-card").find(".tag").contains("Finalizado");
  });
});
