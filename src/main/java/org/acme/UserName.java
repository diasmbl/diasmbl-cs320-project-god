package org.acme;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

/**
 * This class represents the UserName entity that will be persisted in the database.
 */
@Entity
public class UserName extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;  // Unique identifier for each UserName entry

    public String name;  // The name field representing the user's name

    // Getter for the name field
    public String getName() {
        return name;
    }

    // Setter for the name field
    public void setName(String name) {
        this.name = name;
    }
}
