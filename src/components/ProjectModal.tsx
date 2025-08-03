import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl w-full max-w-4xl overflow-y-auto max-h-[90vh] shadow-2xl relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* 🖼 Image */}
            <div className="aspect-video w-full overflow-hidden rounded-t-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 space-y-6">
              {/* 🧾 Title + Description */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>

              {/* 🔖 Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-indigo-100 text-indigo-800 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* 📋 Optional Details */}
              <div className="space-y-6">
                {project.details?.problem && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Problem</h4>
                    <p className="text-gray-600">{project.details.problem}</p>
                  </div>
                )}

                {project.details?.solution && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Solution</h4>
                    <p className="text-gray-600">{project.details.solution}</p>
                  </div>
                )}

                {project.details?.features && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Key Features</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {project.details.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.details?.impact && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Impact</h4>
                    <p className="text-gray-600">{project.details.impact}</p>
                  </div>
                )}
              </div>

              {/* 🔗 Buttons */}
              <div className="flex gap-4 pt-4 border-t mt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
