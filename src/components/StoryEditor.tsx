import React, { useState, useEffect } from 'react';
import { Save, X, Image, Tag, User, BookOpen, Eye } from 'lucide-react';
import { Story, StoryFormData } from '../types/Story';

interface StoryEditorProps {
  story?: Story | null;
  onPublish: (story: StoryFormData) => void;
  onCancel: () => void;
}

const StoryEditor: React.FC<StoryEditorProps> = ({ story, onPublish, onCancel }) => {
  const [formData, setFormData] = useState<StoryFormData>({
    title: '',
    content: '',
    excerpt: '',
    author: '',
    category: '',
    tags: [],
    coverImage: ''
  });

  const [tagInput, setTagInput] = useState('');
  const [isPreview, setIsPreview] = useState(false);
  const [errors, setErrors] = useState<Partial<StoryFormData>>({});

  useEffect(() => {
    if (story) {
      setFormData({
        title: story.title,
        content: story.content,
        excerpt: story.excerpt,
        author: story.author,
        category: story.category,
        tags: story.tags,
        coverImage: story.coverImage
      });
    }
  }, [story]);

  const categories = [
    'Technology', 'Lifestyle', 'Wellness', 'Environment', 'Travel', 
    'Food', 'Arts', 'Science', 'Business', 'Fiction', 'Other'
  ];

  const sampleImages = [
    'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/4503821/pexels-photo-4503821.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2167395/pexels-photo-2167395.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  const handleInputChange = (field: keyof StoryFormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      handleInputChange('tags', [...formData.tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    handleInputChange('tags', formData.tags.filter(tag => tag !== tagToRemove));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<StoryFormData> = {};

    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.content.trim()) newErrors.content = 'Content is required';
    if (!formData.excerpt.trim()) newErrors.excerpt = 'Excerpt is required';
    if (!formData.author.trim()) newErrors.author = 'Author is required';
    if (!formData.category.trim()) newErrors.category = 'Category is required';
    if (!formData.coverImage.trim()) newErrors.coverImage = 'Cover image is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onPublish(formData);
    }
  };

  const generateExcerpt = () => {
    if (formData.content) {
      const words = formData.content.split(' ').slice(0, 30);
      const excerpt = words.join(' ') + (formData.content.split(' ').length > 30 ? '...' : '');
      handleInputChange('excerpt', excerpt);
    }
  };

  if (isPreview) {
    return (
      <div className="min-h-screen py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Preview Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Story Preview</h1>
                <button
                  onClick={() => setIsPreview(false)}
                  className="bg-white/20 p-2 rounded-lg hover:bg-white/30 transition-colors duration-200"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Preview Content */}
            <div className="p-8">
              {formData.coverImage && (
                <img
                  src={formData.coverImage}
                  alt={formData.title}
                  className="w-full h-64 object-cover rounded-xl mb-8"
                />
              )}
              
              <div className="mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {formData.category}
                </span>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4">{formData.title}</h1>
              
              <div className="flex items-center space-x-4 text-gray-600 mb-8">
                <span>By {formData.author}</span>
                <span>•</span>
                <span>{Math.ceil(formData.content.split(' ').length / 200)} min read</span>
              </div>

              <div className="prose prose-lg max-w-none">
                {formData.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {formData.tags.length > 0 && (
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {formData.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">
                {story ? 'Edit Story' : 'Write New Story'}
              </h1>
              <div className="flex space-x-2">
                <button
                  onClick={() => setIsPreview(true)}
                  className="bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200 flex items-center space-x-2"
                >
                  <Eye className="h-4 w-4" />
                  <span>Preview</span>
                </button>
                <button
                  onClick={onCancel}
                  className="bg-white/20 p-2 rounded-lg hover:bg-white/30 transition-colors duration-200"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-8 space-y-6">
            {/* Title */}
            <div>
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                <BookOpen className="h-4 w-4" />
                <span>Story Title</span>
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                placeholder="Enter your story title..."
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                  errors.title ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
            </div>

            {/* Author and Category */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                  <User className="h-4 w-4" />
                  <span>Author</span>
                </label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => handleInputChange('author', e.target.value)}
                  placeholder="Your name"
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.author ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.author && <p className="text-red-500 text-sm mt-1">{errors.author}</p>}
              </div>

              <div>
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                  <Tag className="h-4 w-4" />
                  <span>Category</span>
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.category ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select a category</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
              </div>
            </div>

            {/* Cover Image */}
            <div>
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                <Image className="h-4 w-4" />
                <span>Cover Image URL</span>
              </label>
              <input
                type="url"
                value={formData.coverImage}
                onChange={(e) => handleInputChange('coverImage', e.target.value)}
                placeholder="https://example.com/image.jpg"
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                  errors.coverImage ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.coverImage && <p className="text-red-500 text-sm mt-1">{errors.coverImage}</p>}
              
              {/* Sample Images */}
              <div className="mt-3">
                <p className="text-sm text-gray-600 mb-2">Or choose from our collection:</p>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                  {sampleImages.map((imageUrl, index) => (
                    <button
                      key={index}
                      onClick={() => handleInputChange('coverImage', imageUrl)}
                      className="aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-blue-500 transition-all duration-200"
                    >
                      <img src={imageUrl} alt={`Sample ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Image Preview */}
              {formData.coverImage && (
                <div className="mt-3">
                  <img
                    src={formData.coverImage}
                    alt="Cover preview"
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
              )}
            </div>

            {/* Excerpt */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-gray-700">Story Excerpt</label>
                <button
                  onClick={generateExcerpt}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Auto-generate
                </button>
              </div>
              <textarea
                value={formData.excerpt}
                onChange={(e) => handleInputChange('excerpt', e.target.value)}
                placeholder="A brief description of your story..."
                rows={3}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none ${
                  errors.excerpt ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.excerpt && <p className="text-red-500 text-sm mt-1">{errors.excerpt}</p>}
            </div>

            {/* Content */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Story Content</label>
              <textarea
                value={formData.content}
                onChange={(e) => handleInputChange('content', e.target.value)}
                placeholder="Write your story here..."
                rows={20}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none ${
                  errors.content ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content}</p>}
              <div className="text-sm text-gray-500 mt-2">
                Word count: {formData.content.split(' ').filter(word => word.length > 0).length} |
                Estimated read time: {Math.ceil(formData.content.split(' ').length / 200)} minutes
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Tags</label>
              <div className="flex space-x-2 mb-2">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                  placeholder="Add tags..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                <button
                  onClick={handleAddTag}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Add
                </button>
              </div>
              {formData.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {formData.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center space-x-2"
                    >
                      <span>#{tag}</span>
                      <button
                        onClick={() => handleRemoveTag(tag)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
              <button
                onClick={onCancel}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2"
              >
                <Save className="h-4 w-4" />
                <span>{story ? 'Update Story' : 'Publish Story'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryEditor;