package com.laboutiquedellafrutta.boutique.controller;

import com.laboutiquedellafrutta.boutique.model.Prodotto;
import com.laboutiquedellafrutta.boutique.model.Utente;
import com.laboutiquedellafrutta.boutique.utils.Costanti;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = Costanti.CROSS_ORIGIN)
@RequestMapping(value = "carrello/")
@RestController
public class CarrelloController {

    @RequestMapping(value = {"getCarrello"})
    @ResponseBody
    List<Prodotto> getCarrello(HttpServletRequest request){
        List<Prodotto> list = null;
        HttpSession session = null;
        Utente ut = null;
        try {
            session = request.getSession();
            ut = (Utente) session.getAttribute(Costanti.UTENTE_SESSIONE);
            list = new ArrayList<>();
            if(ut != null) {

            }
        }catch(Exception e) {
            e.printStackTrace();
        }
        return list;
    }
}
