function check() {
    if (document.getElementById("company_name").value==""){
        alert("Empty Company Name isn't allow")
    } 
    else if (document.getElementById("contract_name").value==""){
        alert("Empty Contract Name isn't allow")
    }
    else if (document.getElementById("contract_phone").value==""){
        alert("Empty Contract Phone isn't allow")
    }
    else if (document.getElementById("boot_size").value==""){
        alert("Empty Boot Size isn't allow")
    }
    else if (document.getElementById("chair").value < 1 || document.getElementById("chair").value > 10){
        alert("Chairs number must be 1-10")
    }
    else {
        alert("OK")
    }
    
}

