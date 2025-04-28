import express from "express";
import bodyParser from "body-parser";
import https from "https";

const express=express();
const app=3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req,res)=>{})