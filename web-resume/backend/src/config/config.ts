import convict from "convict";
import dotenv from "dotenv";

dotenv.config();

const config = convict({
    db: {
        dbname: {
            arg: "db-name",
            default: "web-resume",
            doc: "the database name",
            env: "MONGODB_DBNAME",
            format: String
        },
        uri: {
            arg: "db-uri",
            default: "from default",
            doc: "the mongodb uri.",
            env: "MONGODB_URI",
            format: String
        }
    },
    env: {
        arg: "node-env",
        default: "production",
        doc: "The application environment.",
        env: "NODE_ENV",
        format: ["production", "development"]
    },
    jwtSecret: {
        arg: "jwt-secret",
        default: "from default",
        doc: "The jwt secret.",
        env: "JWT_SECRET",
        format: String
    },
    port: {
        arg: "port",
        default: "from default",
        doc: "The port to bind.",
        env: "API_PORT",
        format: "port"
    },
});
// Load environment dependent configuration
const env = config.get("env");
try {
    config.loadFile(`./src/config/${env}.json`);
} catch (e) {
    console.log(e);
}

config.validate({ allowed: "strict" }); // throws error if config does not conform to schema

export default config;
