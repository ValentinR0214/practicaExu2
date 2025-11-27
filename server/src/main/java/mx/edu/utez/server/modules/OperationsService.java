package mx.edu.utez.server.modules;

import mx.edu.utez.server.modules.dto.NumsDTO;
import mx.edu.utez.server.utils.APIResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class OperationsService {

    public ResponseEntity<APIResponse> doSuma(NumsDTO dto) {
        APIResponse body = new APIResponse(
                "Suma realizada correctamente",
                dto.getNum1() + dto.getNum2(),
                HttpStatus.OK
        );

        return new ResponseEntity<>(body, body.getStatus());
    }
}
