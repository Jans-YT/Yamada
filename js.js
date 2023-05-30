function validate(){
    let nama=document.getElementById("nama").value
    let no=document.getElementById("no").value
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value
    let alamat=document.getElementById("alamat").value

    if(nama == ""){
        return showerror("Nama harus diisi")
    }else if(no == ""){
        return showerror("No Telepon harus diisi")
    }else if(email == ""){
        return showerror("Email harus diisi")
    }else if(!email.endsWith(".com")){
        return showerror("Email pengguna harus diakhiri dengan '.com'")
    }else if(password.length < 3 || password.length > 12){
        return showerror("Kata sandi pengguna harus 3 - 12 karakter")
    }else if(alamat == ""){
        return showerror("alamat pengguna harus diisi")
    }
}
let error = document.getElementById("error")
function showerror(massage){
    error.innerHTML=massage
    return false
}