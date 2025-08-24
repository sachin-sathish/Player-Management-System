package fullstackproject.pms_backend.service;

import fullstackproject.pms_backend.dto.PlayerDto;

import java.util.List;

public interface PlayerService {
    PlayerDto createplayer(PlayerDto Dto);
    PlayerDto getPlayerId(Long id);
    List<PlayerDto> getallplayer();
    PlayerDto updateplayer(Long id , PlayerDto update);
    void deleteplayer(Long id);
}