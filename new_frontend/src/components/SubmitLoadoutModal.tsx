import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Upload, Plus, Trash2, Send } from 'lucide-react';

interface SubmitLoadoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Attachment {
  id: string;
  slot: string;
  name: string;
}

const weaponCategories = [
  'Штурмовая винтовка',
  'Пистолет-пулемет',
  'Снайперская винтовка',
  'Легкий пулемет',
  'Дробовик',
  'Пистолет'
];

const attachmentSlots = [
  'Оптика',
  'Ствол',
  'Магазин',
  'Рукоять',
  'Приклад',
  'Лазер',
  'Подствольник'
];

export function SubmitLoadoutModal({ isOpen, onClose }: SubmitLoadoutModalProps) {
  const [formData, setFormData] = useState({
    loadoutName: '',
    weaponCategory: '',
    weaponName: '',
    description: '',
    contact: ''
  });

  const [attachments, setAttachments] = useState<Attachment[]>([
    { id: '1', slot: '', name: '' }
  ]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const addAttachment = () => {
    setAttachments([
      ...attachments,
      { id: Date.now().toString(), slot: '', name: '' }
    ]);
  };

  const removeAttachment = (id: string) => {
    if (attachments.length > 1) {
      setAttachments(attachments.filter(a => a.id !== id));
    }
  };

  const updateAttachment = (id: string, field: 'slot' | 'name', value: string) => {
    setAttachments(attachments.map(a =>
      a.id === id ? { ...a, [field]: value } : a
    ));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.loadoutName.trim()) {
      newErrors.loadoutName = 'Укажите название сборки';
    }

    if (!formData.weaponCategory) {
      newErrors.weaponCategory = 'Выберите категорию оружия';
    }

    if (!formData.weaponName.trim()) {
      newErrors.weaponName = 'Укажите название оружия';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Добавьте описание сборки';
    }

    if (!formData.contact.trim()) {
      newErrors.contact = 'Укажите контакт для связи';
    }

    const filledAttachments = attachments.filter(a => a.slot && a.name);
    if (filledAttachments.length === 0) {
      newErrors.attachments = 'Добавьте хотя бы один аттачмент';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after 2 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
      resetForm();
      onClose();
    }, 2000);
  };

  const resetForm = () => {
    setFormData({
      loadoutName: '',
      weaponCategory: '',
      weaponName: '',
      description: '',
      contact: ''
    });
    setAttachments([{ id: '1', slot: '', name: '' }]);
    setErrors({});
  };

  const handleClose = () => {
    if (!isSubmitting) {
      resetForm();
      onClose();
    }
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-[#242831] border border-[#ea580c]/30 rounded-2xl shadow-2xl shadow-[#ea580c]/10"
        >
          {/* Header */}
          <div className="relative bg-gradient-to-br from-[#ea580c]/10 to-transparent border-b border-[#ea580c]/20 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl tracking-wider mb-2">
                  ОТПРАВИТЬ <span className="text-[#ea580c]">СБОРКУ</span>
                </h2>
                <p className="text-gray-400 text-sm">
                  Поделитесь своей META сборкой с сообществом
                </p>
              </div>

              <button
                onClick={handleClose}
                disabled={isSubmitting}
                className="w-10 h-10 bg-[#1a1d23] border border-[#ea580c]/30 rounded-lg flex items-center justify-center hover:bg-[#ea580c] hover:border-[#ea580c] transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <X className="w-5 h-5 text-[#ea580c] group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>

          {/* Success Message */}
          <AnimatePresence>
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute inset-0 z-10 flex items-center justify-center bg-[#242831]/95 backdrop-blur-sm"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', duration: 0.5 }}
                    className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Send className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl tracking-wider mb-2">Сборка отправлена!</h3>
                  <p className="text-gray-400">Спасибо за вклад в сообщество</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="overflow-y-auto max-h-[calc(90vh-140px)] p-6">
            <div className="space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Loadout Name */}
                <div>
                  <label className="block text-sm text-gray-400 tracking-wider uppercase mb-2">
                    Название сборки *
                  </label>
                  <input
                    type="text"
                    value={formData.loadoutName}
                    onChange={(e) => setFormData({ ...formData, loadoutName: e.target.value })}
                    placeholder="M4A1 Универсальная"
                    className={`w-full bg-[#1a1d23] border ${
                      errors.loadoutName ? 'border-red-500' : 'border-[#ea580c]/30'
                    } rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#ea580c] transition-all placeholder:text-gray-600`}
                  />
                  {errors.loadoutName && (
                    <p className="text-red-400 text-xs mt-1">{errors.loadoutName}</p>
                  )}
                </div>

                {/* Weapon Category */}
                <div>
                  <label className="block text-sm text-gray-400 tracking-wider uppercase mb-2">
                    Категория оружия *
                  </label>
                  <select
                    value={formData.weaponCategory}
                    onChange={(e) => setFormData({ ...formData, weaponCategory: e.target.value })}
                    className={`w-full bg-[#1a1d23] border ${
                      errors.weaponCategory ? 'border-red-500' : 'border-[#ea580c]/30'
                    } rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#ea580c] transition-all cursor-pointer`}
                  >
                    <option value="">Выберите категорию</option>
                    {weaponCategories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                  {errors.weaponCategory && (
                    <p className="text-red-400 text-xs mt-1">{errors.weaponCategory}</p>
                  )}
                </div>

                {/* Weapon Name */}
                <div>
                  <label className="block text-sm text-gray-400 tracking-wider uppercase mb-2">
                    Название оружия *
                  </label>
                  <input
                    type="text"
                    value={formData.weaponName}
                    onChange={(e) => setFormData({ ...formData, weaponName: e.target.value })}
                    placeholder="M4A1"
                    className={`w-full bg-[#1a1d23] border ${
                      errors.weaponName ? 'border-red-500' : 'border-[#ea580c]/30'
                    } rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#ea580c] transition-all placeholder:text-gray-600`}
                  />
                  {errors.weaponName && (
                    <p className="text-red-400 text-xs mt-1">{errors.weaponName}</p>
                  )}
                </div>

                {/* Contact */}
                <div>
                  <label className="block text-sm text-gray-400 tracking-wider uppercase mb-2">
                    Discord / Email *
                  </label>
                  <input
                    type="text"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="username#1234 или email@example.com"
                    className={`w-full bg-[#1a1d23] border ${
                      errors.contact ? 'border-red-500' : 'border-[#ea580c]/30'
                    } rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#ea580c] transition-all placeholder:text-gray-600`}
                  />
                  {errors.contact && (
                    <p className="text-red-400 text-xs mt-1">{errors.contact}</p>
                  )}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm text-gray-400 tracking-wider uppercase mb-2">
                  Описание сборки *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Опишите стиль игры, преимущества и особенности сборки..."
                  rows={4}
                  className={`w-full bg-[#1a1d23] border ${
                    errors.description ? 'border-red-500' : 'border-[#ea580c]/30'
                  } rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#ea580c] transition-all placeholder:text-gray-600 resize-none`}
                />
                {errors.description && (
                  <p className="text-red-400 text-xs mt-1">{errors.description}</p>
                )}
              </div>

              {/* Attachments */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="text-sm text-gray-400 tracking-wider uppercase">
                    Аттачменты *
                  </label>
                  <button
                    type="button"
                    onClick={addAttachment}
                    className="flex items-center gap-2 px-3 py-1.5 bg-[#1a1d23] border border-[#ea580c]/30 rounded-lg text-xs hover:bg-[#ea580c] hover:border-[#ea580c] transition-all group"
                  >
                    <Plus className="w-4 h-4 text-[#ea580c] group-hover:text-white transition-colors" />
                    <span className="text-gray-400 group-hover:text-white tracking-wider uppercase">Добавить</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {attachments.map((attachment, index) => (
                    <motion.div
                      key={attachment.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-[#1a1d23] border border-[#ea580c]/20 rounded-lg p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <select
                            value={attachment.slot}
                            onChange={(e) => updateAttachment(attachment.id, 'slot', e.target.value)}
                            className="bg-[#242831] border border-[#ea580c]/30 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#ea580c] cursor-pointer"
                          >
                            <option value="">Слот</option>
                            {attachmentSlots.map(slot => (
                              <option key={slot} value={slot}>{slot}</option>
                            ))}
                          </select>

                          <input
                            type="text"
                            value={attachment.name}
                            onChange={(e) => updateAttachment(attachment.id, 'name', e.target.value)}
                            placeholder="Название аттачмента"
                            className="bg-[#242831] border border-[#ea580c]/30 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#ea580c] placeholder:text-gray-600"
                          />
                        </div>

                        {attachments.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeAttachment(attachment.id)}
                            className="w-9 h-9 bg-[#242831] border border-red-500/30 rounded-lg flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition-all group flex-shrink-0"
                          >
                            <Trash2 className="w-4 h-4 text-red-400 group-hover:text-white transition-colors" />
                          </button>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
                {errors.attachments && (
                  <p className="text-red-400 text-xs mt-2">{errors.attachments}</p>
                )}
              </div>

              {/* Info Note */}
              <div className="bg-[#1a1d23] border border-blue-500/20 rounded-lg p-4">
                <p className="text-blue-400 text-sm leading-relaxed">
                  <span className="font-medium">Примечание:</span> Все отправленные сборки проходят модерацию. 
                  Мы свяжемся с вами по указанному контакту после проверки.
                </p>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-8 pt-6 border-t border-[#ea580c]/20">
              <button
                type="button"
                onClick={handleClose}
                disabled={isSubmitting}
                className="px-6 py-3 bg-[#1a1d23] border border-[#ea580c]/30 rounded-lg hover:border-[#ea580c] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="tracking-wider uppercase text-sm">Отмена</span>
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 sm:flex-initial px-8 py-3 bg-[#ea580c] hover:bg-[#c2410c] rounded-lg transition-all shadow-lg shadow-[#ea580c]/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span className="tracking-wider uppercase text-sm">Отправка...</span>
                  </>
                ) : (
                  <>
                    <Upload className="w-5 h-5" />
                    <span className="tracking-wider uppercase text-sm">Отправить сборку</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
