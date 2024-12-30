  Feature: veterinarios

  Scenario Outline: Validar vista listado de veterinarios
    Given el usuario ingresa a la web  
    When como usuario ingreso a la seccion veterinarios
    Then como usuario la lista de veterinarios valido los datos de la primera fila "<nombre>","<especialidad>"

    Examples:
      | nombre   | especialidad |
      | ortoni   |  asdsad |