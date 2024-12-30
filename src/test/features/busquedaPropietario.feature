Feature: busquedaPropietario

  Scenario Outline: buscar un cliente y validar la informacion del usuario
    Given el usuario ingresa a la web  
    When como usuario ingreso a la seccion propietarios
    And como usuario ingreso los datos de de un cliente "<apellido>"
    Then como usuario debería ver el "<nombre>","<apellido>","<ciudad>","<telefono>","<botonEditar>","<botonanadir>","<mascotaVisita>"
        
    Examples:
      | nombre    | apellido    | ciudad  | telefono | botonEditar | botonanadir | mascotaVisita    |
      | George Franklin    | Franklin      | 110 W. Liberty St. | Madison  | Edit Owner        | Add New Pet    | Pets and Visits |

