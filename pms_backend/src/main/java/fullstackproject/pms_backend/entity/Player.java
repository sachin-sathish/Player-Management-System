package fullstackproject.pms_backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Player")
@Data // Generates getters, setters, toString, equals, and hashCode
@AllArgsConstructor // Generates constructor with all fields
@NoArgsConstructor  // Generates no-args constructor
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long playerId;

    @Column(name = "Name")
    private String name;

    @Column(name = "Sport")
    private String sport;

    @Column(name = "Email", nullable = false, unique = true)
    private String email;
}
