package fullstackproject.pms_backend.repository;

import fullstackproject.pms_backend.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepository extends JpaRepository<Player,Long> {

}
