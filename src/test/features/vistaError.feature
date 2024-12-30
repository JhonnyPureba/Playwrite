  Feature: Vista Error

  Scenario Outline: Validar mensaje de error en la vista error
    Given el usuario ingresa a la web  
    When como usuario ingreso a la seccion error
    Then como usuario valido el mensaje de error "<mensaje>"

    Examples:
      | mensaje  | 
      | ortoni   | 