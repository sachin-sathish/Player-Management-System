package fullstackproject.pms_backend.controller;

import fullstackproject.pms_backend.dto.PlayerDto;
import fullstackproject.pms_backend.exception.ResourceNotFound;
import fullstackproject.pms_backend.repository.PlayerRepository;
import fullstackproject.pms_backend.service.PlayerService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/Player")

public class Playercontroller {

    private PlayerService playerService;
// posting the data
    @PostMapping
    public ResponseEntity<PlayerDto> CreatePlayer(@RequestBody PlayerDto Dto){
        PlayerDto saveddto = playerService.createplayer(Dto);
        return new ResponseEntity<>(saveddto, HttpStatus.CREATED);
    }
// getting the info by single id
    @GetMapping("{id}")
    public ResponseEntity<PlayerDto> getemployeeid(@PathVariable("id") Long id){
       PlayerDto getid = playerService.getPlayerId(id);
        return new ResponseEntity<>(getid,HttpStatus.OK);
    }
// exception
    @RestControllerAdvice
    public class GlobalExceptionHandler {

        @ExceptionHandler(ResourceNotFound.class)
        public ResponseEntity<String> handleResourceNotFound(ResourceNotFound ex) {
            return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

// getting all info
    @GetMapping
    public  ResponseEntity<List<PlayerDto>> getplayerall(){
        List <PlayerDto> getall = playerService.getallplayer();
        return new ResponseEntity<>(getall,HttpStatus.OK);
    }

    // updating the info
    @PutMapping("{id}")
    public ResponseEntity<PlayerDto> Updatevalue(@PathVariable ("id") Long id, @RequestBody PlayerDto dto){
        PlayerDto updatedvalued = playerService.updateplayer(id,dto);
      return new ResponseEntity<>(updatedvalued,HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deletevalue (@PathVariable ("id")Long id){
        playerService.deleteplayer(id);
        return ResponseEntity.ok("Player deleted suceesfully");
    }
}
