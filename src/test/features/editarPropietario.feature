Feature: editar Propietario

  Scenario Outline: editar propietarios
    Given el usuario ingresa a la web  
    When como usuario ingreso a la seccion propietarios
    And como usuario hago clic en el boton Find Owner
    And como usuario selecciono al tercer lugar de la lista
    And como usuario selecciono el boton editar
    And como usuario modifico los cambios "<dirrecion>","<ciudad>"
    Then como usuario valido el cambio de informacion para "<dirrecion>","<ciudad>"
    Examples:
      | dirrecion    | ciudad    | 
      | ortoni    | asdsad      | 