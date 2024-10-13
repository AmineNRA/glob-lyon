import multer from 'multer';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration de multer pour le téléchargement des fichiers
const storage = multer.memoryStorage(); // Utilisation de la mémoire pour stocker le fichier temporairement
const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Limite à 5 Mo
}).single('avatar'); // L'input doit avoir un name="avatar"

// Middleware pour traiter et transformer l'image
export default {
    processAvatar: (req, res, next) => {
        upload(req, res, async (err) => {
            if (err) {
                return res.status(400).send({ error: 'Error uploading file' });
            }

            if (!req.file) {
                return res.status(400).send({ error: 'No file uploaded' });
            }

            try {
                const roundedCorners = Buffer.from(
                    '<svg><rect x="0" y="0" width="100" height="100" rx="50" ry="50"/></svg>'
                );

                // Transformation de l'image avec sharp
                const outputFileName = `${Date.now()}-${req.file.originalname.split('.')[0]}.webp`;
                const outputDir = path.resolve(__dirname, '../../inte-public/img/user');
                const outputPath = path.join(outputDir, outputFileName);

                const processedImage = await sharp(req.file.buffer)
                    .resize(100, 100)
                    .composite([{ input: roundedCorners, blend: 'dest-in' }]) // Ajout des coins arrondis
                    .toFormat('webp') // Conversion en webp
                    .toBuffer();

                // Enregistrer le fichier transformé
                fs.writeFileSync(outputPath, processedImage);

                // Ajouter l'URL du fichier enregistré à la requête pour l'utiliser plus tard
                req.file.path = `/img/user/${outputFileName}`; // Format URL valide avec slashes

                next(); // Passer au middleware suivant
            } catch (error) {
                console.error('Error processing image', error);
                res.status(500).send({ error: 'Error processing image' });
            }
        });
    }
};
