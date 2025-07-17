package com.email.email_writter_sb;


import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/email")
@RequiredArgsConstructor
public class EmailGeneratorController {

    private final EmailGeneratorService emailGeneratorService;


    @PostMapping("/generate")
    public ResponseEntity<String> generateEmail(@RequestBody EmailRequest emailRequest) {
        String response = emailGeneratorService.generateEmailReply(emailRequest);
        return ResponseEntity
                .ok()
                .header("Content-Type", "application/json")
                .body("{\"reply\": \"" + response.replace("\"", "\\\"") + "\"}");
    }


}
