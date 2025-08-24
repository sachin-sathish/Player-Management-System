package fullstackproject.pms_backend.service;
import fullstackproject.pms_backend.dto.PlayerDto;
import fullstackproject.pms_backend.entity.Player;
import fullstackproject.pms_backend.exception.ResourceNotFound;
import fullstackproject.pms_backend.mapper.Playermapper;
import fullstackproject.pms_backend.repository.PlayerRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PlayerServiceImpl implements PlayerService{
 private PlayerRepository playeerepo;

    @Override
    public PlayerDto createplayer(PlayerDto Dto) {
        Player player= Playermapper.mapToPlayer(Dto);
        Player saveplayer = playeerepo.save(player);
        return Playermapper.mapToPlayerDto(saveplayer);
    }

    @Override
    public PlayerDto getPlayerId(Long id) {
       Player getplayerid =  playeerepo.findById(id)
               .orElseThrow(()-> new ResourceNotFound("The Id is  not found " + id));
        System.out.println("Player "+id);
        return  Playermapper.mapToPlayerDto(getplayerid);
    }

    @Override
    public List<PlayerDto> getallplayer() {
        List<Player> allplayer = playeerepo.findAll();
        return allplayer.stream().map((allplayers) -> Playermapper.mapToPlayerDto(allplayers)).collect(Collectors.toList());
    }

    @Override
    public PlayerDto updateplayer(Long id, PlayerDto update) {
       Player player =  playeerepo.findById(id)
               .orElseThrow(()-> new ResourceNotFound(" The updated value is not updated " + id));
        System.out.println("Player "+id);

        player.setName(update.getName());
        player.setEmail(update.getEmail());
        player.setSport(update.getSport());
       Player savedrepo=  playeerepo.save(player);

        return Playermapper.mapToPlayerDto(savedrepo);
    }

    public void deleteplayer(Long id) {
       Player del =  playeerepo.findById(id)
               .orElseThrow(()->new ResourceNotFound(" The id doesnot exist " + id));
        playeerepo.deleteById(id );

    }

}
