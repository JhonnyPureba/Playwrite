  Feature: propietarios 
  
  Scenario: Validar vista listado de propietarios
    Given el usuario ingresa a la web  
    When como usuario ingreso a la seccion propietarios
    Then como usuario valido que se visualice el boton Find Owner
    And como usuario valido que se visualice el boton Add Owner 
    And como usuario valido que se visualice el campo de texto para la busqueda
