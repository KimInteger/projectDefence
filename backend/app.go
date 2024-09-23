package main

import (
	"log"
	"net/http"
)

func main() {
	fs := http.FileServer(http.Dir("./dist"))

	numport := 3000

	http.Handle("/", fs)

	log.Printf("서버 시작 : %d", numport)
	// err 로 선언하고 ListenAndServe에서 ":PORT번호"
	err := http.ListenAndServe(":3000", nil)
	if err != nil {
		log.Fatal("서버 시작 실패", err)
	}
}