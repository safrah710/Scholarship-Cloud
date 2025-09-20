import express from "express"
import { MongoClient } from "mongodb"
export const client=new MongoClient(process.env.url)
export const dbname="scholarship"