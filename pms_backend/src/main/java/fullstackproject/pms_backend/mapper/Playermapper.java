package fullstackproject.pms_backend.mapper;
import fullstackproject.pms_backend.entity.Player;
import fullstackproject.pms_backend.dto.PlayerDto;

public class Playermapper {

    public static PlayerDto mapToPlayerDto(Player player) {
        return new PlayerDto(
                player.getPlayerId(),
                player.getName(),
                player.getSport(),
                player.getEmail()
        );
    }

    public static Player mapToPlayer(PlayerDto dto) {
        return new Player(
                dto.getPlayerId(),
                dto.getName(),
                dto.getSport(),
                dto.getEmail()
        );
    }
}
