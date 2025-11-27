package mx.edu.utez.server.modules;

import lombok.AllArgsConstructor;
import mx.edu.utez.server.modules.dto.NumsDTO;
import mx.edu.utez.server.utils.APIResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/api-calc")
@CrossOrigin(origins = {"*"})
public class OperationsController {

    private final OperationsService operationsService;

    @PostMapping("/suma")
    public ResponseEntity<APIResponse> doSuma(@RequestBody NumsDTO dto){
        return operationsService.doSuma(dto);
    }
}
