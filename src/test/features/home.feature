 Feature: Home
 
 @add
 Scenario Outline: Validate la carga de la web 
    Given el usuario ingresa a la web  
    When el usuario valida el titulo de la pagina "<titulo>"
    Then el usuario valida el mensaje de bienvenida "<mensaje>"

    Examples:
      | titulo   | mensaje |
      | ortoni   |  asdsad |

