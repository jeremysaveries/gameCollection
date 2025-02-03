import "dotenv/config";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.PG_URL, {
  // De base sequelize utilise le camelCase pour les noms de colonnes
  // Je veux que sequelize utilise le snake_case
  define: {
    underscored: true,
  },
});
console.log("PG_URL =", process.env.PG_URL);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("✅ Connexion à la base de données réussie !");
  } catch (error) {
    console.error("❌ Erreur de connexion à la base de données :", error);
  }
}

testConnection();

export default sequelize;
