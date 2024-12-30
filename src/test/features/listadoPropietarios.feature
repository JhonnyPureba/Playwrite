Feature: listadoPropietarios

  Scenario Outline: Validar listado de propietarios
    Given el usuario ingresa a la web  
    When como usuario ingreso a la seccion propietarios
    And como usuario hago clic en el boton Find Owner
    Then como usuario valido que se visualice la lista con las siguientes cabeceras "<name>","<Address>","<City>","<Telephone>","<Pets>"
    And como usuario valido que se visualice los datos de la primera fila de datos "<nombre>","<dirrecion>","<ciudad>","<telefono>","<mascota>"

    Examples:
      | name    | Address    | City  | Telephone | Pets | nombre | dirrecion    |ciudad | telefono    |mascota | 
      | ortoni    | asdsad      | mensaje | mensaje  | mensaje        | cumpleaños | tipo    |cumpleaños | tipo    |cumpleaños |